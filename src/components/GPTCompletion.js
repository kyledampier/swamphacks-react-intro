import { useState } from "react";

function ShowCompletion(props) {
  return (
    <div>
      <h4>Completion</h4>
      <p>
        <i> {props.prompt} </i>
      </p>
      <p>{props.completion}</p>
    </div>
  );
}

export default function GPTCompletion(props) {
  const [promptContent, setPromptContent] = useState("");
  const [completion, setCompletion] = useState(null);

  let inputStyle = {
    width: "80%",
    height: "2em",
    padding: "0.5em",
    fontSize: "1.0em",
    border: "1px solid lightgray",
    borderRadius: "0.5em",
  };

  let labelStyle = {
    display: "block",
    marginBottom: "0.5em",
    spacing: "0.5em",
    fontSize: "1.5em",
  };

  let buttonStyle = {
    display: "block",
    marginTop: "0.5em",
    marginBottom: "0.5em",
    padding: "1.0em",
    fontSize: "1.0em",
    backgroundColor: "lightblue",
    border: "none",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "0.5em",
  };

  function onSubmit() {
    getCompletion(promptContent);
  }

  async function getCompletion(prompt) {
    if (!prompt) {
      alert("Please enter a prompt.");
      return;
    }

    const response = await props.openai.createCompletion({
      model: "text-davinci-002",
      prompt: prompt,
    });

    setCompletion(response.data.choices[0].text);
  }

  return (
    <div>
      <h3>GPT-3 Completion</h3>
      <label style={labelStyle}>
        Prompt
        <hr style={{ margin: "0.5em", border: "0px" }} />
        <textarea
          name="promptContent"
          style={inputStyle}
          value={promptContent}
          onChange={(e) => setPromptContent(e.target.value)}
          rows={4}
        />
      </label>
      <button style={buttonStyle} onClick={onSubmit}>
        Submit
      </button>
      {completion && <ShowCompletion prompt={promptContent} completion={completion} /> }
    </div>
  );
}
