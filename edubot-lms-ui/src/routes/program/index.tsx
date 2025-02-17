import Programs from '@/pages/program/Programs'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/program/')({
  component: () => Programs()
}) 