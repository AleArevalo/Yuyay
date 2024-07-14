'use client'

import * as d3 from 'd3'
import { FC, useRef, useEffect } from 'react'

interface MindMapProps {
  data: any;
}

const MindMap: FC<MindMapProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement | null>(null)

  useEffect(() => {
    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove() // Clear the svg before rendering new elements

    const width = 800
    const height = 600

    // Create the root node
    const root = d3.hierarchy(data)

    // Create a tree layout
    const treeLayout = d3.tree().size([width, height])

    // Apply the layout to the root node
    treeLayout(root)

    // Add links
    svg
      .selectAll('line')
      .data(root.links())
      .enter()
      .append('line')
      .attr('x1', d => String(d.source.x))
      .attr('y1', d => String(d.source.y))
      .attr('x2', d => String(d.source.x))
      .attr('y2', d => String(d.source.y))
      .attr('stroke', 'black')

    // Add nodes
    svg
      .selectAll('circle')
      .data(root.descendants())
      .enter()
      .append('circle')
      .attr('cx', d => String(d.x))
      .attr('cy', d => String(d.y))
      .attr('r', 5)
      .attr('fill', 'red')

    // Add labels
    svg
      .selectAll('text')
      .data(root.descendants())
      .enter()
      .append('text')
      .attr('x',d => String(d.x ?? 0 + 10))
      .attr('y', d => String(d.y))
      .text(d => d.data.name)
      .attr('font-size', '12px')
      .attr('fill', 'black')
  }, [data])

  return <svg ref={svgRef} width="800" height="600"></svg>
}

export default MindMap