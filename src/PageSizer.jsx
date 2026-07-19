import { useEffect } from 'react';

function PageSizer() {
  useEffect(() => {
    function onResize() {
      console.log('window resized');
    }
    window.addEventListener('resize', onResize);

    // Cleanup runs on unmount (and before re-run if dependencies change)
    return () => window.removeEventListener('resize', onResize);
  }, []); // Empty dependency array: run once after first render (mount)

  return <p>Watching page size…</p>;
}