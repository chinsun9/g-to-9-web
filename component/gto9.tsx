import styled from '@emotion/styled';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { gto9 } from 'g-to-9';

const Main = styled.div`
  padding: 10px;
  display: grid;
  grid-template-rows: auto 1fr;
  overflow: hidden;

  > {
    * {
      width: 100%;
      max-width: 600px;
      padding: 20px;
      margin: auto;
    }

    .output {
      height: 100%;
      overflow: auto;
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
      <textarea
        className="input"
        ref={inputEl}
        rows={5}
        value={text}
        onChange={onChangeHandler}
      />

      <pre className="output">{gto9(text)}</pre>
    </Main>
  );
};

export default Gto9;
