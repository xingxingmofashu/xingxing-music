import { computed, toValue, useAttrs } from 'vue';
import type { Ref } from 'vue';
import type { Strategy } from '~/types';
import { get, mergeConfig, omit } from '~/utils';
import { useAppConfig } from '#imports';

export const useUI = <T>(
  key: any,
  $ui?: Ref<(Partial<T> & { strategy?: Strategy }) | undefined>,
  $config?: Ref<T> | T,
  $wrapperClass?: Ref<string>,
  withAppConfig = false
) => {
  const $attrs = useAttrs();
  const appConfig = useAppConfig();

  const ui = computed(() => {
    const _ui = toValue($ui);
    const _config = toValue($config);
    const _wrapperClass = toValue($wrapperClass);

    return mergeConfig<T>(
      _ui?.strategy || ((appConfig.ui as any)?.strategy as Strategy),
      _wrapperClass ? { wrapper: _wrapperClass } : {},
      _ui || {},
      import.meta.dev || withAppConfig ? get(appConfig.ui, key, {}) : {},
      _config || {}
    );
  });

  const attrs = computed(() => omit($attrs, ['class']));

  return {
    ui,
    attrs,
  };
};
