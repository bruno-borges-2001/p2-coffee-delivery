import { IconProps } from 'phosphor-react';
import { IconElement } from '../../@types/components';
import { cn } from '../../utils';

export function SectionContainer({
  children,
  className,
  ...rest
}: React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>) {
  return (
    <section className={cn('bg-base-200 rounded-md p-10', className)} {...rest}>
      {children}
    </section>
  );
}

interface SectionTitleProps {
  icon: IconElement;
  iconProps?: IconProps;
  title: string;
  description: string;
}

export function SectionTitle({
  icon: Icon,
  iconProps,
  title,
  description,
}: SectionTitleProps) {
  return (
    <header className="flex items-start gap-2">
      <Icon size={22} {...(iconProps ?? {})} />
      <p>
        <span className="tm text-base-800">{title}</span>
        <br />
        <span className="ts">{description}</span>
      </p>
    </header>
  );
}
