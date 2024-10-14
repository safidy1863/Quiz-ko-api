// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorMessage = (_?: string) => {
  return {
    userNotFound:
      'Aucun compte associé à cette adresse e-mail/numéro matricule.',
    errorPassword: 'Mot de passe incorrect. Veuillez réessayer!',
    emailAdressAlreadyExist: "L'adresse email existe déjà",
    registrationNumber: 'Ce numéro matricule existe déjà',
    classNotFound: "Class id n'existe pas",
    questionNotFound: "Question id n'existe pas",
    subjectNotFound: "Subject id n'existe pas",
    testNotFound: "Test id n'existe pas",
    studentNotFound: "Student id n'existe pas",
    answerNotFound: "Answer id n'existe pas",
  };
};
