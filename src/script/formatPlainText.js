function replaceTag(tag) {
  const tagsToReplace = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
  };

  return tagsToReplace[tag] || tag;
}

/**
 * Returns formated HTML Text Editor ready
 * @param {String}
 * @returns {String}
 */
export default (_text) => {
  const escapedText = _text.replace(/[&<>]/g, replaceTag);
  return `<div>${escapedText.replace(/\n/g, '</div><div>')}</div>`;
};
