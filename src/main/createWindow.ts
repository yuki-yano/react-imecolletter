import { BrowserWindow } from "electron"
import * as path from "path"
import installExtension, {
  REACT_DEVELOPER_TOOLS
} from "electron-devtools-installer"

let win
function createWindow() {
  win = new BrowserWindow()
  win.loadURL(path.join("file://", path.resolve("./dist"), "index.html"))
  win.webContents.openDevTools()

  win.on("close", () => {
    win = null
  })

  installExtension(REACT_DEVELOPER_TOOLS)
}

export default createWindow
