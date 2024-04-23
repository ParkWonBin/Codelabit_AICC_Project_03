import { useState, useEffect } from 'react';

function useScript(src) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 항상 스크립트를 검색하거나 생성
    let script = document.querySelector(`script[src="${src}"]`);

    if (!script) {
      script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    }

    const handleLoad = () => setLoading(false);
    const handleError = (error) => {
      setError(error);
      setLoading(false);
    };

    script.addEventListener("load", handleLoad);
    script.addEventListener("error", handleError);

    return () => {
      script.removeEventListener("load", handleLoad);
      script.removeEventListener("error", handleError);
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [src]);  // src가 변경될 때만 이펙트를 다시 실행

  return [loading, error];
}

export default useScript;
