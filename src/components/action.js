export const add = (window) => {

    return {
      type: "add",
      payload: window
    }
  }
export const deletecount = (window) => {

    return {
      type: "delete",
      payload: window
    }
  }
export const deleteAll = (window) => {

    return {
      type: "deleteAll",
      payload: window
    }
  }