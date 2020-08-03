import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const RichText = ({ text, onChange }) => (
      <CKEditor
          editor={ ClassicEditor }
          data={text}
          onChange={ (event, editor) => {
            const data = editor.getData();
            onChange(data);
          } }
      />
);

export default RichText;
