import auth from "oauth-electron-twitter"

import * as React from "react"
import Button from "@material-ui/core/Button"

export default () => {
  return (
    <div>
      <Button onClick={click} variant="contained" color="primary">
        Login
      </Button>
    </div>
  )
}

async function click() {
  const { BrowserWindow } = require("electron").remote
  const info = {
    key: "vVXBHFcVwcOccAuSPiSa1LNSZ",
    secret: "iGA7trGRtMNSTmx1tlvxSdRin2FtTV6LxnFxPNoSs6tgd8W9Ds"
  }

  const window = new BrowserWindow({ webPreferences: { nodeIntegration: false } })
  await auth.login(info, window)
}
