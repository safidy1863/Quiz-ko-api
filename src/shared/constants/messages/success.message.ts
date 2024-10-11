export const successMessage = (model?: string) => {
  return {
    deleted: `La suppression du ${model} a été faite avec succès. `,
    reply: 'La réponse de cette question a été bien enregistré.',
  };
};
