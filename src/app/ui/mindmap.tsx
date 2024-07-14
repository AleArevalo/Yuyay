'use client'

import { useRef, useEffect, FC, useState } from 'react'

import * as d3 from 'd3'

interface Node {
    id: string;
    info: string;
    registros?: string[];
}

interface Link {
    source: string;
    target: string;
}

interface MindMapProps {
    nodes: Node[];
    links: Link[];
}

const MindMap: FC<MindMapProps> = ({ nodes, links }) => {
    const svgRef = useRef<SVGSVGElement | null>(null)
    const [selectedNode, setSelectedNode] = useState<Node | null>(null)

    useEffect(() => {
        // Specify the dimensions of the chart.
        const width = 1232
        const height = 500

        // Specify the color scale.
        const color = d3.scaleOrdinal(d3.schemeSet1)

        const tooltip = d3.select('body').append('div')
            .attr('class', 'tooltip')
            .style('position', 'absolute')
            .style('visibility', 'hidden')
            .style('background', '#fff')
            .style('padding', '5px')
            .style('border', '1px solid #ccc')
            .style('border-radius', '4px')

        const simulation = d3.forceSimulation(nodes as d3.SimulationNodeDatum[])
            .force('link', d3.forceLink(links).id((d: any) => d.id))
            .force('charge', d3.forceManyBody().strength(-200))
            .force('x', d3.forceX())
            .force('y', d3.forceY())

        const svg = d3.select(svgRef.current)
            .attr('width', width)
            .attr('height', height)
            .attr('viewBox', [-width / 2, -height / 2, width, height])
            .attr('style', 'max-width: 100%; height: auto;')

        svg.selectAll('*').remove() // Clear the svg before rendering new elements

        const link = svg.append('g')
            .attr('stroke', '#999')
            .attr('stroke-opacity', 0.6)
            .selectAll('line')
            .data(links)
            .join('line')
            .attr('stroke-width', 1)

        const node = svg.append('g')
            .attr('class', 'nodes')
            .selectAll('circle')
            .data(nodes)
            .enter()
            .append('circle')
            .attr('r', 5)
            .attr('fill', d => color(d.registros ? 'main' : 'sub'))
            .attr('class', 'cursor-pointer')
            .on('click', (event, d) => {
                setSelectedNode(d)
            })
            .on('mouseover', (event, d) => {
                if (d.registros) {
                    // Convertir cada registro en un elemento de lista HTML con clases de Tailwind para estilos
                    const listaRegistros = d.registros.map(registro => `<li class="text-sm text-gray-700">${registro}</li>`).join('')
                    // Crear la lista completa en HTML con clases de Tailwind para estilos
                    const htmlLista = `<ul class="list-disc pl-5">${listaRegistros}</ul>`
                    // Establecer el contenido de tooltip incluyendo la lista con estilos de Tailwind
                    tooltip.html(`Categoría: ${d.id}<br> ${d.info}<br>${htmlLista}`)
                        // Aplicar clases de Tailwind al tooltip para estilos adicionales
                        .attr('class', 'p-2 bg-white shadow-lg rounded-lg text-gray-800')
                        .style('visibility', 'visible')
                }
            })
            .on('mousemove', (event) => {
                tooltip.style('top', (event.pageY - 10) + 'px')
                .style('left', (event.pageX + 10) + 'px')
            })
            .on('mouseout', () => {
                tooltip.style('visibility', 'hidden')
            })
            .call(d3.drag<SVGCircleElement, Node, SVGGElement>()
                .on('start', dragstarted)
                .on('drag', dragged)
                .on('end', dragended))

        const label = svg.append('g')
            .selectAll('text')
            .data(nodes)
            .enter()
            .append('text')
            .attr('dy', -10)
            .attr('text-anchor', 'middle')
            .text(d => d.id)
            .attr('font-size', '12px')
            .attr('class', 'fill-black dark:fill-white')

        simulation.on('tick', () => {
            link
                .attr('x1', d => (d as any).source.x)
                .attr('y1', d => (d as any).source.y)
                .attr('x2', d => (d as any).target.x)
                .attr('y2', d => (d as any).target.y)

            node
                .attr('cx', d => (d as any).x)
                .attr('cy', d => (d as any).y)

            label
                .attr('x', d => (d as any).x)
                .attr('y', d => (d as any).y)
        })

        function dragstarted(event: any) {
            if (!event.active) simulation.alphaTarget(0.3).restart()
            event.subject.fx = event.subject.x
            event.subject.fy = event.subject.y
        }

        function dragged(event: any) {
            event.subject.fx = event.x
            event.subject.fy = event.y
        }

        function dragended(event: any) {
            if (!event.active) simulation.alphaTarget(0)
            event.subject.fx = null
            event.subject.fy = null
        }
    }, [nodes, links])

    return (
        <div>
            <svg ref={svgRef} className="max-h-[500px]"></svg>
            {selectedNode && (
                <div className="text-black">
                    <h2>{selectedNode.id}</h2>
                    <p>{selectedNode.info}</p>
                </div>
            )}
        </div>
    )
}

export default MindMap