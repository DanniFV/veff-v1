import fs from 'node:fs/promises'
import { parseLine } from './lib/parse.js';
import { generateIndexHtml, generateQuestionCategoryHtml, generateQuestionHtml } from './lib/html.js';


const MAX_QUESTIONS_PER_CATEGORY = 100

async function main() {

  // Búa til möppu ef hún er ekki til

  const distPath = './dist';
  fs.mkdir(distPath);


  const content = await fs.readFile('./questions.csv', 'utf-8')


  const lines = content.split("\n")

  const questions = lines.map(parseLine);

  const qualityHistoryQuestions = questions
    .filter((q) => q && q.categoryNumber === "4" && q.quality === "3")
    .slice(0, MAX_QUESTIONS_PER_CATEGORY);

    // TODO ítra í gegnum alla flokka og búa til

  console.log(qualityHistoryQuestions.length);

  const questionsHtml = qualityHistoryQuestions.map(generateQuestionHtml).join('\n');

  const sagaOutput = generateQuestionCategoryHtml('Saga', questionsHtml);

  const sagaPath = './dist/saga.html';

  await fs.writeFile(sagaPath, sagaOutput, 'utf-8');

  // TODO búa til alla hina flokkana
  //Almenn kunnátta
  const qualityGeneralQuestions = questions
    .filter((q) => q && q.categoryNumber === "1" && q.quality === "3")
    .slice(0,MAX_QUESTIONS_PER_CATEGORY);

  const generalQuestionsHtml = qualityGeneralQuestions.map(generateQuestionHtml).join('\n');

  const generalOutput = generateQuestionCategoryHtml('Almenn kunnátta', generalQuestionsHtml);

  const generalPath = './dist/general.html';

  await fs.writeFile(generalPath, generalOutput, 'utf-8');

  //Náttura og vísindi
  const qualityScienceQuestions = questions
    .filter((q) => q && q.categoryNumber === "2" && q.quality === "3")
    .slice(0,MAX_QUESTIONS_PER_CATEGORY);

  const scienceQuestionsHtml = qualityScienceQuestions.map(generateQuestionHtml).join('\n');

  const scienceOutput = generateQuestionCategoryHtml('Náttúra og vísindi', scienceQuestionsHtml);

  const sciencePath = './dist/science.html';

  await fs.writeFile(sciencePath, scienceOutput, 'utf-8');

  //Bókmenntir og listir
  const qualityArtQuestions = questions
    .filter((q) => q && q.categoryNumber === "3" && q.quality === "3")
    .slice(0,MAX_QUESTIONS_PER_CATEGORY);

  const artQuestionsHtml = qualityArtQuestions.map(generateQuestionHtml).join('\n');

  const artOutput = generateQuestionCategoryHtml('Bókmenntir og Listir', artQuestionsHtml);

  const artPath = './dist/art.html';

  await fs.writeFile(artPath, artOutput, 'utf-8');

  //Landafræði
  const qualityGeographyQuestions = questions
    .filter((q) => q && q.categoryNumber === "5" && q.quality === "3")
    .slice(0,MAX_QUESTIONS_PER_CATEGORY);

  const geographyQuestionsHtml = qualityGeographyQuestions.map(generateQuestionHtml).join('\n');

  const geographyOutput = generateQuestionCategoryHtml('Landafræði', geographyQuestionsHtml);

  const geographyPath = './dist/geography.html';

  await fs.writeFile(geographyPath, geographyOutput, 'utf-8');

  //Skemmtun og afþreying
  const qualityFunQuestions = questions
    .filter((q) => q && q.categoryNumber === "6" && q.quality === "3")
    .slice(0,MAX_QUESTIONS_PER_CATEGORY);

  const funQuestionsHtml = qualityFunQuestions.map(generateQuestionHtml).join('\n');

  const funOutput = generateQuestionCategoryHtml('Landafræði', funQuestionsHtml);

  const funPath = './dist/fun.html';

  await fs.writeFile(funPath, funOutput, 'utf-8');

  //íþróttir port
  const qualitySportQuestions = questions
    .filter((q) => q && q.categoryNumber === "7" && q.quality === "3")
    .slice(0,MAX_QUESTIONS_PER_CATEGORY);

  const sportQuestionsHtml = qualitySportQuestions.map(generateQuestionHtml).join('\n');

  const sportOutput = generateQuestionCategoryHtml('Íþróttir og tómstundir', sportQuestionsHtml);

  const sportPath = './dist/sport.html';

  await fs.writeFile(sportPath, sportOutput, 'utf-8');  
  

  //TODO búa til index
  const indexHtml = generateIndexHtml();

  await fs.writeFile('./dist/index.html', indexHtml, 'utf-8');

}

main().catch((error) => {
  console.error('error generating', error);

});
