'use client'

import { useRef,useState } from 'react'
import dynamic from 'next/dynamic';
import Editor from 'quill/core/editor';
import Quill from 'quill';

const Delta = Quill.import('delta');

const TextEditor = () => {
    const [range, setRange] = useState();
    const [lastChange, setLastChange] = useState();
    const [readOnly, setReadOnly] = useState(false);
  

    const quillRef = useRef();
  
    return (
      <div>
        <div class="controls">
          <label>
            Read Only:{' '}
            <input
              type="checkbox"
              value={readOnly}
              onChange={(e) => setReadOnly(e.target.checked)}
            />
          </label>
          <button
            className="controls-right"
            type="button"
            onClick={() => {
              alert(quillRef.current?.getLength());
            }}
          >
            Get Content Length
          </button>
        </div>
        <div className="state">
          <div className="state-title">Current Range:</div>
          {range ? JSON.stringify(range) : 'Empty'}
        </div>
        <div className="state">
          <div className="state-title">Last Change:</div>
          {lastChange ? JSON.stringify(lastChange.ops) : 'Empty'}
        </div>
      </div>
    );
}

export default TextEditor