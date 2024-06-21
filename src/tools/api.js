export const getQuestionsAnswers = async () => {
  const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets/AIzaSyCSBBSCr18D72VeEJjvY9-i1bLyptYbtGo/values/Feuille 1!A1:F50?key=AIzaSyD7k5iZJ_dO6-gqf4T44JkKTfcl0o4acGQ&majorDimension=COLUMNS')
  if (!response.ok) {
    console.error(response.text())
    return
  }
  return response.json()
}