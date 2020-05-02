const baseExport = files => {
  const modules = {}
  files.keys().forEach((key) => {
    modules[ key.replace(/(\.\/|\.js)/g, '') ] = files(key).default
  });
  return modules;
}

export const cards = baseExport(require.context('./cards', false, /\.js$/));
export const keywords = baseExport(require.context('./keywords', false, /\.js$/));
export const rules = baseExport(require.context('./rules', false, /\.js$/));