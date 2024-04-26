export function geneRecommendOutput(text: string) {
  return `<h4 class="text-blue-600 min-w-96">文献推荐</h4>
    ${text}
  `;
}
export function geneSummaryOutput(text: string) {
  return `<div class="ml-4 min-w-96">
            <h4 class="text-blue-600 my-0 min-w-96">关键词</h4>
             <span>${text}</span>
             <h4 class="text-blue-600 my-0 min-w-96">摘要</h4>
             <span>${text}</span>
          </div>
  `;
}
