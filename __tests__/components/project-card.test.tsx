import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { ProjectCard } from '@/components/ui/project-card';

describe('ProjectCard Accessibility', () => {
  const mockProject = {
    slug: 'test-project',
    title: 'Test Project',
    description: 'Test description',
    imageUrl: '/test-image.jpg',
    category: 'Test Category',
    area: 'Test Area'
  };

  it('should have no accessibility violations', async () => {
    const { container } = render(<ProjectCard project={mockProject} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
