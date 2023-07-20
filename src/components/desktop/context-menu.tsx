import Image from 'next/image'
import React from 'react'

import { useSettings } from '@/hooks'

import {
  ContextMenu as UIContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/ui/context-menu'

import {
  AddCircleIcon,
  AlignIconsToGridIcon,
  ArrowClockwiseIcon,
  AutoArrangeIconsIcon,
  DisplaySettingsIcon,
  LargeIconsIcon,
  MediumIconsIcon,
  PersonalizeIcon,
  ShowDesktopIconsIcon,
  ShowMoreOptionsIcon,
  SortByIcon,
} from '../icons'
import { GridIcon } from '../icons/grid'

type ContextMenuProps = {
  children: React.ReactNode
}

const ContextMenu = (props: ContextMenuProps) => {
  const { children } = props

  return (
    <UIContextMenu>
      <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>
      <ContextMenuContent>
        <View />
        <SortBy />
        <Refresh />
        <ContextMenuSeparator />
        <New />
        <ContextMenuSeparator />
        <DisplaySettings />
        <Personalize />
        <ContextMenuSeparator />
        <OpenInTerminal />
        <ContextMenuSeparator />
        <ShowMoreOptions />
      </ContextMenuContent>
    </UIContextMenu>
  )
}

const View = () => {
  const { desktop, setDesktop } = useSettings()

  return (
    <ContextMenuSub>
      <ContextMenuSubTrigger>
        <GridIcon width={14} height={14} className='mr-3' />
        View
      </ContextMenuSubTrigger>
      <ContextMenuPortal>
        <ContextMenuSubContent className='min-w-[266px]'>
          <ContextMenuRadioGroup
            value={desktop.iconSize}
            onValueChange={(value) =>
              setDesktop({
                ...desktop,
                iconSize: value as
                  | 'large-icons'
                  | 'medium-icons'
                  | 'small-icons',
              })
            }
          >
            <ContextMenuRadioItem value='large-icons'>
              <LargeIconsIcon width={14} height={14} className='mr-3' /> Large
              icons <ContextMenuShortcut>Ctrl+Shift+2</ContextMenuShortcut>
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value='medium-icons'>
              <MediumIconsIcon width={14} height={12} className='mr-3' />
              Medium icons
              <ContextMenuShortcut>Ctrl+Shift+3</ContextMenuShortcut>
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value='small-icons'>
              <GridIcon width={14} height={14} className='mr-3' />
              Small icons
              <ContextMenuShortcut>Ctrl+Shift+4</ContextMenuShortcut>
            </ContextMenuRadioItem>
          </ContextMenuRadioGroup>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem
            checked={desktop.autoArrangeIcons}
            onCheckedChange={(value) => {
              setDesktop({
                ...desktop,
                autoArrangeIcons: value,
              })
            }}
            disabled={!desktop.showDesktopIcons}
          >
            <AutoArrangeIconsIcon width={14} height={14} className='mr-3' />
            Auto arrange icons
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            checked={desktop.alignIconsToGrid}
            onCheckedChange={(value) => {
              setDesktop({
                ...desktop,
                alignIconsToGrid: value,
              })
            }}
            disabled={!desktop.showDesktopIcons}
          >
            <AlignIconsToGridIcon width={14} height={14} className='mr-3' />
            Align icons to grid
          </ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem
            checked={desktop.showDesktopIcons}
            onCheckedChange={(value) => {
              setDesktop({
                ...desktop,
                showDesktopIcons: value,
              })
            }}
          >
            <ShowDesktopIconsIcon width={14} height={14} className='mr-3' />
            Show desktop icons
          </ContextMenuCheckboxItem>
        </ContextMenuSubContent>
      </ContextMenuPortal>
    </ContextMenuSub>
  )
}

const SortBy = () => {
  return (
    <ContextMenuSub>
      <ContextMenuSubTrigger>
        <SortByIcon width={14} height={14} className='mr-3' />
        Sort by
      </ContextMenuSubTrigger>
      <ContextMenuPortal>
        <ContextMenuSubContent>
          <ContextMenuItem>Name</ContextMenuItem>
          <ContextMenuItem>Size</ContextMenuItem>
          <ContextMenuItem>Item type</ContextMenuItem>
          <ContextMenuItem>Date modified</ContextMenuItem>
        </ContextMenuSubContent>
      </ContextMenuPortal>
    </ContextMenuSub>
  )
}

const Refresh = () => {
  return (
    <ContextMenuItem>
      <ArrowClockwiseIcon width={14} height={14} className='mr-3' />
      Refresh
    </ContextMenuItem>
  )
}

const New = () => {
  return (
    <ContextMenuSub>
      <ContextMenuSubTrigger>
        <AddCircleIcon width={14} height={14} className='mr-3' />
        New
      </ContextMenuSubTrigger>
      <ContextMenuPortal>
        <ContextMenuSubContent>
          <ContextMenuItem>
            <Image
              src='/static/images/icons/folder.png'
              className='mr-3'
              width={18}
              height={18}
              quality={100}
              draggable={false}
              alt='Folder'
            />
            Folder
          </ContextMenuItem>
          <ContextMenuItem>
            <Image
              src='/static/images/icons/shortcut.png'
              className='mr-3'
              width={18}
              height={18}
              quality={100}
              draggable={false}
              alt='Shortcut'
            />
            Shortcut
          </ContextMenuItem>
          <ContextMenuItem>
            <Image
              src='/static/images/icons/bitmap-image.png'
              className='mr-3'
              width={18}
              height={18}
              quality={100}
              draggable={false}
              alt='Bitmap image'
            />
            Bitmap image
          </ContextMenuItem>
          <ContextMenuItem>
            <Image
              src='/static/images/icons/text-document.png'
              className='mr-3'
              width={18}
              height={18}
              quality={100}
              draggable={false}
              alt='Text document'
            />
            Text Document
          </ContextMenuItem>
          <ContextMenuItem>
            <Image
              src='/static/images/icons/compressed-folder.png'
              className='mr-3'
              width={18}
              height={18}
              quality={100}
              draggable={false}
              alt='Compressed folder'
            />
            Compressed (zipped) Folder
          </ContextMenuItem>
        </ContextMenuSubContent>
      </ContextMenuPortal>
    </ContextMenuSub>
  )
}

const DisplaySettings = () => {
  return (
    <ContextMenuItem>
      <DisplaySettingsIcon width={14} height={14} className='mr-3' />
      Display settings
    </ContextMenuItem>
  )
}

const Personalize = () => {
  return (
    <ContextMenuItem>
      <PersonalizeIcon width={14} height={14} className='mr-3' />
      Personalize
    </ContextMenuItem>
  )
}

const OpenInTerminal = () => {
  return (
    <ContextMenuItem>
      <Image
        src='/static/images/apps/windows-terminal/icon.png'
        width={14}
        height={14}
        className='mr-3'
        alt='Windows Terminal'
      />
      Open in Terminal
    </ContextMenuItem>
  )
}

const ShowMoreOptions = () => {
  return (
    <ContextMenuItem>
      <ShowMoreOptionsIcon width={14} height={14} className='mr-3' />
      Show more options
    </ContextMenuItem>
  )
}

export default ContextMenu
