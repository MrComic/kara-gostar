const translate = (key: string, translateObject: any): string => {
  let splitedKeys: string[] = key?.split(".");
  if (!splitedKeys || (splitedKeys && splitedKeys.length == 0)) {
    return "";
  } else if (splitedKeys && splitedKeys.length > 1) {
    if (translateObject) {
      let object = translateObject[splitedKeys.splice(0, 1)[0]];
      return translate(splitedKeys.join("."), object);
    } else {
      return "";
    }
  } else {
    return translateObject[splitedKeys[0]];
  }
};

export default translate;
