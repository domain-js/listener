function Listener(cnf, { logger, _, async }) {
  const listeners = new Map();

  /**
   * 添加监听函数
   */
  const add = (name, handler) => {
    if (!_.isFunction(handler)) throw Error(`时间监听必须是一个函数: ${handler}`);
    const fns = listeners.get(name) || new Set();
    if (!fns.size) listeners.set(name, fns);
    fns.add(handler);
  };

  /**
   * 移除监听事件
   */
  const remove = (name, handler) => {
    const fns = listeners.get(name);
    if (!fns) return;
    fns.delete(handler);
    if (!fns.size) listeners.delete(name);
  };

  /**
   * 监听队列消息
   */
  const listen = async ({ name, data }) => {
    const fns = listeners.get(name);

    if (!fns) return;

    async.eachSeries(fns, async fn => {
      try {
        await fn(data);
      } catch (e) {
        logger.error(e);
      }
    });
  };

  /**
   * 列出有那些被监听的事件
   */
  const list = () => Array.from(listeners.keys());

  return { listen, add, remove, list };
}

Listener.Deps = ["logger", "_", "async"];

module.exports = Listener;
