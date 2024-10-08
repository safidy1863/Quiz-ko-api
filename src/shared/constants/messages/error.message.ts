export const errorMessage = (model?: string) => {
  return {
    userNotFound:
      'Aucun compte associé à cette adresse e-mail/numéro matricule.',
    errorPassword: 'Mot de passe incorrect. Veuillez réessayer!',
    emailAdressAlreadyExist: "L'adresse email existe déjà",
    registrationNumber: 'Ce numéro matricule existe déjà',
    classNotFound: "Class id n'existe pas",
  };
};
