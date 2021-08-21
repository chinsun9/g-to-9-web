import styled from '@emotion/styled';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { gto9 } from 'g-to-9';
import { FaCopy } from 'react-icons/fa';

const Main = styled.div`
  padding: 10px;
  display: grid;
  grid-template-rows: auto 1fr;
  overflow: hidden;

  > * {
    max-width: 600px;
    width: 100%;
    margin: auto;
  }

  .inputWrapper .input,
  .output {
    padding: 20px;
    font-size: xxx-large;
    color: inherit;
    background-color: transparent;
    outline: none;
    font-family: inherit;
    width: 100%;
  }

  .inputWrapper {
    position: relative;

    .input:focus {
      border-color: #0f9e67;
    }
  }

  .output {
    height: 100%;
    overflow: auto;
    position: relative;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  .icon {
    --color: 0, 0%, 100%;
    position: absolute;
    right: 10px;
    top: 10px;
    color: hsla(var(--color), 0.3);
    font-size: x-large;

    :hover {
      color: hsla(var(--color), 0.7);
    }
  }
`;

const Gto9 = () => {
  const [text, setText] = useState('');
  const inputEl = useRef<HTMLTextAreaElement>(null);

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  useEffect(() => {
    inputEl.current?.focus();
  }, []);

  return (
    <Main>
      <div className="inputWrapper">
        <textarea
          className="input"
          ref={inputEl}
          rows={5}
          value={text}
          onChange={onChangeHandler}
        />
        {text.length > 0 ? (
          <button
            className="icon"
            onClick={() => {
              console.log(`clear`);
            }}
          >
            X
          </button>
        ) : null}
      </div>

      <pre className="output">
        <button
          className="icon"
          onClick={() => {
            console.log(`copy`);
          }}
        >
          <FaCopy />
        </button>
        {gto9(text)}
      </pre>
    </Main>
  );
};

export default Gto9;
