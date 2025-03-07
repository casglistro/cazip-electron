"use client"

import { useTranslation } from "react-i18next"
import { FileArchive, FolderOpen, Upload, Download, Trash2, Search, RefreshCw, Settings, Globe } from "lucide-react"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { ThemeSelector } from "./theme-selector"
import { useTheme } from "next-themes"

interface ToolbarProps {
  onExtract: () => void
  onCompress: () => void
  selectedFiles: string[]
  currentArchive: string | null
  onOpenConfig: () => void
}

export function Toolbar({ onExtract, onCompress, selectedFiles, currentArchive, onOpenConfig }: ToolbarProps) {
  const { t, i18n } = useTranslation()
  const { theme, setTheme } = useTheme()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <TooltipProvider>
      <div className="flex items-center p-1 border-b border-border bg-background">
        <div className="flex items-center space-x-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 transition-all duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground"
                onClick={onCompress}
                disabled={selectedFiles.length === 0}
              >
                <FileArchive className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{t("compress")}</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 transition-all duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground"
                onClick={onExtract}
                disabled={!currentArchive}
              >
                <FolderOpen className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{t("extract")}</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <Separator orientation="vertical" className="mx-2 h-6" />

        <div className="flex items-center space-x-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 transition-all duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground"
              >
                <Upload className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{t("addFiles")}</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 transition-all duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground"
              >
                <Download className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{t("extractSelected")}</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 transition-all duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground"
                disabled={selectedFiles.length === 0}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{t("delete")}</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <Separator orientation="vertical" className="mx-2 h-6" />

        <div className="flex items-center space-x-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 transition-all duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground"
              >
                <Search className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{t("search")}</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 transition-all duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground"
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{t("refresh")}</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="ml-auto flex items-center space-x-1">
          <ThemeSelector />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 transition-all duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground"
              >
                <Settings className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => changeLanguage("en")}>
                <Globe className="mr-2 h-4 w-4" />
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage("zh")}>
                <Globe className="mr-2 h-4 w-4" />
                中文
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={onOpenConfig}>
                <Settings className="mr-2 h-4 w-4" />
                {t("openConfigWindow")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </TooltipProvider>
  )
}

