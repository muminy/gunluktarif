"use client"

import { cn } from "#/lib/utils"
import { NameValue } from "#/types"
import Container from "../Container"
import Repeater from "../Repeater"
import { useState } from "react"

export interface StepProps {
  step: number
  text: string
}
export function Step({ step, text }: StepProps) {
  return (
    <div className="space-y-2 mb-5 bg-secondary p-5 rounded-xl hover-ring">
      <h4 className="font-semibold text-white">{step}. Adım</h4>
      <p>{text}</p>
    </div>
  )
}

export interface IRecipeListProps extends NameValue {}
export function RecipeList({ name, value }: IRecipeListProps) {
  const [isSelected, setSelected] = useState(false)
  return (
    <button
      onClick={() => setSelected(!isSelected)}
      className="flex w-full px-3 py-3 space-x-2 items-center bg-secondary hover-ring rounded-xl"
    >
      <div className="flex min-w-[28px] h-7 border-2 rounded-full center-center">
        {isSelected && (
          <div className="min-w-[20px] h-5 rounded-full bg-yellow-400" />
        )}
      </div>
      <span
        className={cn("font-semibold text-white", {
          "line-through": isSelected,
        })}
      >
        {value} {name}
      </span>
    </button>
  )
}

export interface IRecipeProps {
  steps: string[]
  ingredients: NameValue[]
}
export default function Recipe({ ingredients, steps }: IRecipeProps) {
  return (
    <div className="border-y">
      <Container className="grid lg:grid-cols-2 grid-cols-1">
        <div className="lg:border-r py-10 lg:pr-8 border-b lg:border-b-0">
          <h3 className="text-4xl text-white font-bold mb-8">
            Adımlar
          </h3>

          <Repeater
            data={steps}
            render={(item, index) => (
              <Step step={index + 1} text={item} />
            )}
          />
        </div>
        <div className="py-10 lg:pl-8">
          <Repeater
            as="ul"
            data={ingredients}
            className="gap-y-3 flex flex-col"
            renderHeader={
              <h3 className="text-4xl text-white font-bold mb-8">
                İçindekiler
              </h3>
            }
            render={(item) => <RecipeList {...item} />}
          />
        </div>
      </Container>
    </div>
  )
}
