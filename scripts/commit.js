const getAddMessage = async (changeset, options) =>
  `docs(changeset): ${changeset.summary}`;

const getVersionMessage = async (releasePlan, options) =>
  "chore(release): release packages";

module.exports = {
  getAddMessage,
  getVersionMessage,
};
