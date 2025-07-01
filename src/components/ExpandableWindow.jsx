import React, {useEffect, useState} from 'react';

function ExpandableDiv() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(prev => !prev);

  return (
    <div 
      onClick={toggleExpand}
      className={`transition-all duration-300 overflow-hidden cursor-pointer bg-blue-100 rounded p-4
        ${expanded ? 'w-48' : 'h-16'}`

      }
    >
       <p className="font-bold">Click me to {expanded ? 'collapse' : 'expand'}!</p>
       {expanded && <p>This content is revealed when expanded.</p>}
      
    </div>
  )
}

export default ExpandableDiv;