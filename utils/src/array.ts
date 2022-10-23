export const arrayUtil = {
  findIndex: (key: number | string, val: any[]) => {
    return val.findIndex(index => index === key)
  }
}