import Component from "vue-class-component";
import { withHooks, useData, useEffect } from 'vue-hooks';
import { VueClass } from 'vue-class-component/lib/declarations';

interface Props {
  initialCount: number,
};

interface Data {
  count: number,
}

export const FunctionalComponent = withHooks((h, props: Props) => {

  const data: Data = useData({
    count: props.initialCount,
  });

  const increment = () => { data.count++ };

  useEffect(() => {
    document.title = `Count is ${data.count}`;
  }, [data.count]);

  return (
    <div>
      <h4>Count: {data.count}</h4>
      <button onClick={increment}>Increment</button>
    </div>
  )
});