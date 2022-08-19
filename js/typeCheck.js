export const typecheck = (function() {

    const isFunction = (fn) => fn && {}.toString.call(fn) === '[object Function]';

    return {
        isFunction
    }
})();