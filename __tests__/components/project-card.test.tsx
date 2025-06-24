import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProjectCard } from '@/components/ui/project-card';

describe('ProjectCard', () => {
  const mockProject = {
    slug: 'test-project',
    title: 'Test Project',
    description: 'Test description',
    imageUrl: '/test-image.jpg',
    category: 'Test Category',
    area: 'Test Area'
  };

  it('renders project information correctly', () => {
    render(<ProjectCard project={mockProject} />);
    
    expect(screen.getByText(mockProject.title)).toBeInTheDocument();
    expect(screen.getByText(mockProject.description)).toBeInTheDocument();
    expect(screen.getByText(mockProject.category)).toBeInTheDocument();
    expect(screen.getByText(mockProject.area)).toBeInTheDocument();
  });

  it('renders image with correct alt text', () => {
    render(<ProjectCard project={mockProject} />);
    
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('alt', `${mockProject.category} in ${mockProject.area} - ${mockProject.title}`);
    // Next.js Image component transforms the URL, just verify it contains the original filename
    const encodedImageUrl = encodeURIComponent(mockProject.imageUrl);
    expect(image).toHaveAttribute('src', expect.stringContaining(encodedImageUrl));
  });

  it('contains a link to the project page', () => {
    render(<ProjectCard project={mockProject} />);
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', expect.stringContaining(mockProject.slug));
  });
});
