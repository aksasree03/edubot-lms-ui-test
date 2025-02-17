import AddProgram from '@/pages/program/AddProgram'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/program/add')({
  component: () => AddProgram()
}) 