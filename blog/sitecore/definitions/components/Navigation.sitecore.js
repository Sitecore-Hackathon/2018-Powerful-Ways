export default manifest => {
  manifest.addComponent({
    name: "Navigation",
    displayName: "Navigation",
    fields: [
      { name: "title", type: manifest.fieldTypes.singleLineText },
      { name: "items", type: manifest.fieldTypes.singleLineText }
    ]
  });
};
