'use client'

import { useRef, useEffect, FC, useState } from 'react'
import * as d3 from 'd3'

interface Node {
    id: string;
    info: string;
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
        const svg = d3.select(svgRef.current)
        svg.selectAll('*').remove() // Clear the svg before rendering new elements

        const width = 800
        const height = 600

        const simulation = d3.forceSimulation(nodes as d3.SimulationNodeDatum[])
            .force('link', d3.forceLink(links).id((d: any) => d.id))
            .force('charge', d3.forceManyBody().strength(-200))
            .force('center', d3.forceCenter(width / 2, height / 2))

        const link = svg.append('g')
            .attr('class', 'links')
            .selectAll('line')
            .data(links)
            .enter()
            .append('line')
            .attr('stroke', 'black')

        const node = svg.append('g')
            .attr('class', 'nodes')
            .selectAll('circle')
            .data(nodes)
            .enter()
            .append('circle')
            .attr('r', 5)
            .attr('fill', 'red')
            .on('click', (event, d) => {
                setSelectedNode(d)
            })
            .call(d3.drag<SVGCircleElement, Node, SVGGElement>()
                .on('start', dragstarted)
                .on('drag', dragged)
                .on('end', dragended))

        const label = svg.append('g')
            .attr('class', 'labels')
            .selectAll('text')
            .data(nodes)
            .enter()
            .append('text')
            .attr('dy', -10)
            .attr('text-anchor', 'middle')
            .text(d => d.id)
            .attr('font-size', '12px')
            .attr('fill', 'black')

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

        function dragstarted(event: any, d: any) {
            if (!event.active) simulation.alphaTarget(0.3).restart()
            d.fx = d.x
            d.fy = d.y
        }

        function dragged(event: any, d: any) {
            d.fx = event.x
            d.fy = event.y
        }

        function dragended(event: any, d: any) {
            if (!event.active) simulation.alphaTarget(0)
            d.fx = null
            d.fy = null
        }
    }, [nodes, links])

    return (
        <div>
            <svg ref={svgRef} width="800" height="600"></svg>
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