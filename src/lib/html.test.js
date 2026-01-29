import assert from 'node:assert';
import { describe, it } from 'node:test';
import { generateQuestionHtml, generateQuestionCategoryHtml, generateIndexHtml } from './html.js';

describe('html', () => {
    describe('generateIndexHtml', () => {
        it('should test', () => {
            const result = generateIndexHtml();
            assert.ok(result.includes('<h2>Velkomin velkomin!</h2>'));
            assert.ok(result.includes('<p>Veldu Flokk sem þú vilt svara spurningum úr</p>'));
            assert.ok(result.includes('<li><a href="saga.html"> Saga </a></li>'));
            assert.ok(result.includes('<li><a href="general.html"> Almenn kunnátta </a></li>'));
            assert.ok(result.includes('<li><a href="science.html"> Náttúra og vísindi </a></li>'));
            assert.ok(result.includes('<li><a href="art.html"> Bókmenntir og List </a></li>'));
            assert.ok(result.includes('<li><a href="geography.html"> Landafræði </a></li>'));
            assert.ok(result.includes('<li><a href="fun.html"> Skemmtun og afþreying </a></li>'));
            assert.ok(result.includes('<li><a href="sport.html"> Íþróttir og tómstundir </a></li>'));
        });
    });
    describe('generateQuestionHtml', () => {
        it('should generate a question object with question, answer and three buttons', () => {
            const input = { question: 'a', answer: 'b'};

            const output = generateQuestionHtml(input);

            assert.ok(output.includes('<section class="question" data-answered="False">'));
            assert.ok(output.includes('<h3>a</h3>'));
            assert.ok(output.includes('<button type="button" class="button button-show"> Sýna svar</button>'));
            assert.ok(output.includes('<p class="answer" hidden>b</p>'));
            assert.ok(output.includes('<button type="button" class="button button-correct"> Rétt </button>'));
            assert.ok(output.includes('<button type="button" class="button button-incorrect"> Rangt </button>'));
            
        })
    })
});