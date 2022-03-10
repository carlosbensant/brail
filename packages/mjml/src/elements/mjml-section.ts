import React, { ReactNode } from 'react';
import { BorderProps, ClassNameProps, PaddingProps } from '../types';
import CSS from 'csstype';

import { createMjmlElement } from '../utils/create-mjml-element';

export type SectionProps = {
  children?: ReactNode;
  fullWidth?: boolean | undefined;
  backgroundColor?: CSS.Properties['backgroundColor'] | undefined;
  backgroundUrl?: string | undefined;
  backgroundRepeat?: CSS.Properties['backgroundRepeat'] | undefined;
  backgroundSize?: CSS.Properties['backgroundSize'] | undefined;
  backgroundPosition?: CSS.Properties['backgroundPosition'] | undefined;
  backgroundPositionX?: CSS.Properties['backgroundPositionX'] | undefined;
  backgroundPositionY?: CSS.Properties['backgroundPositionY'] | undefined;
  verticalAlign?: CSS.Properties['verticalAlign'] | undefined;
  textAlign?: CSS.Properties['textAlign'] | undefined;
  direction?: 'ltr' | 'rtl' | undefined;
} & BorderProps &
  PaddingProps &
  ClassNameProps;

export const Section = createMjmlElement<SectionProps>('mj-section');
