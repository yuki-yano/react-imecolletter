import { app } from "electron"

import createWindow from "./createWindow"

app.on("ready", createWindow)

app.on("window-all-closed", () => {
  return
})

app.on("activate", (_, hasVisibleWindows) => {
  if (!hasVisibleWindows) {
    createWindow()
  }
})
