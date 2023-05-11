import React from 'react'

const poem = [{
    lines: [    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.']
  },]

  const link = () => {

    return (
        <div>
            {poem.map(poems => (
                <div key={poems.lines}>
                    <article>
                        {poems.lines.map(line => (
                            <p key={line}>{line} <hr /></p>
                        ))}
                    </article>
                    </div>
            ))}
        </div>
    )
  }


  export default link;