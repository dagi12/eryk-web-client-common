const MODE = {
  NO: 0,
  CREATE: 1,
  EDIT: 2,
  PREVIEW: 3
};


export const isPreviewOrEdit = mode => mode === 2 || mode === 3;

export {
  MODE
};
