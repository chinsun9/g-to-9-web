import styled from '@emotion/styled';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { gto9 } from 'g-to-9';

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex-direction: column;

  > {
    * {
      max-width: 600px;
      padding: 20px;
      width: 100%;
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
    <>
      <Main>
        <textarea
          ref={inputEl}
          className="input"
          value={text}
          onChange={onChangeHandler}
        />

        <div className="output">{gto9(text)}</div>
      </Main>
    </>
  );
};

export default Gto9;
