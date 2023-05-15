"use client"

import Container from "../Container"
import Repeater from "../Repeater"
import { useState } from "react"

export function Step({ step }: { step: number }) {
  return (
    <div className="space-y-2 mb-5 bg-secondary p-5 rounded-xl hover-ring">
      <h4 className="font-semibold text-white">{step}. Adım</h4>
      <p>
        Yumurta ve şeker karıştırılır.(Biz çikolatalı yaptığımız için
        şeker miktarını az tuttuk Sizler isteğe bağlı şeker miktarını
        arttırabilirsiniz
      </p>
    </div>
  )
}

export function RecipeList() {
  const [isSelected, setSelected] = useState(false)
  return (
    <button
      onClick={() => setSelected(!isSelected)}
      className="flex space-x-2 items-center"
    >
      <div className="flex min-w-[28px] h-7 border-2 rounded-full center-center">
        {isSelected && (
          <div className="min-w-[20px] h-5 rounded-full bg-secondary" />
        )}
      </div>
      <span className="font-semibold text-white">
        Frozen Mixed Vegetables
      </span>
    </button>
  )
}

export default function Recipe() {
  return (
    <div className="border-y">
      <Container className="grid lg:grid-cols-2 grid-cols-1">
        <div className="lg:border-r py-10 lg:pr-8 border-b lg:border-b-0">
          <h3 className="text-4xl text-white font-bold mb-8">
            Adımlar
          </h3>

          <Repeater
            data={[1, 2, 3]}
            render={(item) => <Step step={item} />}
          />
        </div>
        <div className="py-10 lg:pl-8">
          <Repeater
            as="ul"
            data={[1, 2, 3, 4]}
            className="space-y-2"
            renderHeader={
              <>
                <h3 className="text-4xl text-white font-bold mb-8">
                  İçindekiler
                </h3>
                <h4 className="mb-2 text-white text-xl font-bold">
                  Hamur İçin
                </h4>
              </>
            }
            render={() => <RecipeList />}
          />
        </div>
      </Container>
    </div>
  )
}
