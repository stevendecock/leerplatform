package be.decock.steven.leerplatform.repository;

import be.decock.steven.leerplatform.domain.neo4j.Category;
import org.springframework.data.neo4j.repository.GraphRepository;

public interface CategoryRepository extends GraphRepository<Category> {
    
}
