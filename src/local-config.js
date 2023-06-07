let localConfig = {
  // name: `16. 期末報告(II) - 111-2 數位典藏與數位人文概論`,
  // link: `https://docs.google.com/presentation/d/1HxOjpuTMdhjTf4WnRuvPmHRoluaFVwrNbOela_6-oec/edit?usp=sharing`,
  // content: ``
}

// ----------------------------------------------------------------

let localConfigEnv = {
  locale: 'zh-TW'
}

for (let name in localConfigEnv) {
  localConfig[name] = localConfigEnv[name]
}

export default localConfig