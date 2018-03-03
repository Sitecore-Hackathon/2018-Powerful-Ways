export default manifest => {
  manifest.addComponent({
    name: "Article",
    displayName: "Article",
    fields: [
      { name: "title", type: manifest.fieldTypes.singleLineText },
      { name: "date", type: manifest.fieldTypes.singleLineText },
      { name: "author", type: manifest.fieldTypes.singleLineText },
      { name: "tags", type: manifest.fieldTypes.singleLineText },
      { name: "intro", type: manifest.fieldTypes.richText },
      { name: "body", type: manifest.fieldTypes.richText }
    ]
  });
};
