import React from 'react'
import Image from './Image'

type TechArray = [
  {
    type: string
    stacks: [Stack]
  }
]

type Stack = {
  techTitle: string
  techIconName: string
  techColorName: string
  techLogoColor: 'white' | 'black'
}

const techArray: TechArray = [
  {
    type: 'FrontEnd',
    stacks: [
      {
        techTitle: 'react',
        techIconName: 'react',
        techColorName: '61DAFB',
        techLogoColor: 'white',
      },
    ],
  },
]

export default function Tech() {
  return techArray.map((tech) => (
    <>
      <h3 className="block border-b-[2px]">{tech.type}</h3>
      <div className="flex gap-2">
        {tech.stacks.map((stack) => (
          <div key={stack.techTitle}>
            {`![${stack.techTitle}](https://img.shields.io/badge/${stack.techTitle}-${stack.techColorName}?style=for-the-badge&logo=react&logoColor=${stack.techLogoColor})`}
          </div>
        ))}
      </div>
    </>
  ))
}
