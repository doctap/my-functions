async function intervalDelay(delay: number, step: number = Infinity) {

  const elapsedTime = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  async function* clock(max: number) {
    for (let count = 1; count <= max; count++) {
      await elapsedTime(delay)

      yield count
    }
  }

  for await (const tick of clock(step)) {
    console.log(tick)
  }
}

intervalDelay(2000, 5);