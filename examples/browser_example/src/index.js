const llama = require("llamaindex");

async function ask() {
  const HUGGINGFACE_API_TOKEN = "<HUGGINGFACE_TOKEN>";
  const text = document.getElementById("text-file").content;
  const doc = new llama.Document({text: text});
  const serviceContext = llama.serviceContextFromDefaults({
    llm: new llama.BlindLlama(HUGGINGFACE_API_TOKEN),
    embedModel: new llama.LocalEmbedding(),
  });
  const index = await llama.VectorStoreIndex.fromDocuments([doc], { serviceContext: serviceContext });
  const retriever = index.asRetriever();
  retriever.similarityTopK = 2;
  const queryEngine = index.asQueryEngine({ retriever: retriever });
  const response = await queryEngine.query(
    document.getElementById('question').value,
  );
  const res = response.toString();
  document.getElementById('answer').innerHTML = "Answer: " + res;
}

window.ask = ask;

