const debounce = (func: (v: string) => void, delay: number) => {
  let timer: any

  return (value: string) => {
    clearTimeout(timer)

    timer = setTimeout(() => {
      func(value)
    }, delay)
  }
}

