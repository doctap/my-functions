export const getRows = <TItem>(items: TItem[], rowAmount: number): TItem[][] => {
  let rows: TItem[][] = []

  for (let i = 0, k = -1; i < items.length; i++) {
    if (i % rowAmount === 0) {
      k++
      rows[k] = []
    }

    rows[k].push(items[i])
  }

  return rows
}

console.log(getRows([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4], 4))