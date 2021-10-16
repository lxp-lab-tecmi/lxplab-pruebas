module.exports = (questions) =>
  Object.values(questions)
    .map((v) => v.filter(({ question_type: t }) => t !== "annotation").length)
    .reduce((a, b) => a + b, 0);
