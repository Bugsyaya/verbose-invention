export const getQuestionsAnswers = async () => {
  const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets/1jfeuGCqFmkyHhdTTin8zXMJeOPhos_9TzfLsvWdZiEs/values/Feuille 1!A1:F50?key=AIzaSyCSBBSCr18D72VeEJjvY9-i1bLyptYbtGo&majorDimension=COLUMNS')
  if (!response.ok) {
    console.error(response.text())
    return
  }
  return response.json()
}